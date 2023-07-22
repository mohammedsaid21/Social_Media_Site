//deployed backend for testing

const BASE_URL = 'http://momentsconnect.com'; 
// const BASE_URL = 'http://localhost:3001'; 

class ServiceHelperUtil{

    getBaseURL(){
        return BASE_URL;
    }

}

export default new ServiceHelperUtil();