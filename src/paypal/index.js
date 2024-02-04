import  React,{Component} from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";
import scriptLoader from "react-async-script-loader";
import store from '../store'
export class RenderPaypal extends Component
{
constructor(props)
{
    super(props);
    this.state={showButton:false,}
    window.React = React;
    window.ReactDOM=ReactDOM;
}
componentDidMount()
{
    console.log("Entered componentDdMount " +  JSON.stringify(store.getState()));
const { isScriptLoaded, isScriptLoadSucceed} =this.props;
if( isScriptLoaded && isScriptLoadSucceed && !this.state.showButton )
    {
this.setState({showButton:true});

    }

}

componentDidUpdate(prevProps)
{
    const { isScriptLoaded, isScriptLoadSucceed} =this.props;
    const isLoadedButWasntLoadedBefore =!this.state.showButton && !prevProps.isScriptLoaded && isScriptLoaded;
    if(isLoadedButWasntLoadedBefore && isScriptLoadSucceed && !this.state.showButton)
    {
        this.setState({showButton:true});
    }


}

onCancel=()=>{}
onSuccess=()=>{}
onError=()=>{}
onAuthorize=()=>{


}
 payment=()=>{}

 render()
 {
const showBtn= this.state.showButton;
console.log(showBtn);
return(
<div>
    { showBtn ?
        (<div id="paypal-button"><paypal.Button.react
                env={"sandbox"}
                payment={this.payment}
                onAuthorize={this.onAuthorize}
                onCancel={this.onCancel}
                onSuccess={this.onSuccess}
                onError={this.onError}
                style={{color:"blue",label:"paypal",shape:"rect",taglne:false}}
              /></div> ): <h1>Paypalnot rendered </h1>
    
    }
    </div>
)

 }

}

export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(RenderPaypal);