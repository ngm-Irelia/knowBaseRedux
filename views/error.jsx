import React from 'react'; 

const page = {
    title: 'error page'
};

class Error extends React.Component {
    render() {
        return (
            <div> 
              <div > error 页面 </div>
            </div>
        );
    }
}

Error.UIPage = page;
export default Error;
export { Error };