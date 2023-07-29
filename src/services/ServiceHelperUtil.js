//deployed backend for testing

const BASE_URL = 'https://socialbackend-bv3f.onrender.com'; 
// const BASE_URL = 'http://localhost:3001'; 

class ServiceHelperUtil{

    getBaseURL(){
        return BASE_URL;
    }

}

export default new ServiceHelperUtil();