module.exports = async function (context, req) {
    try {
        let inputBody = req.body;
        
        context.log(`${inputBody}`);
        context.res = {
            status: 200, 
            headers: {
                'Content-Type': 'application/json'
            },
            body:{ success: 0, msg: "validateResponse"}
        };
        return;
    } catch (e) {
        context.log("Catch- Error in /external: ", e)
        context.res = {
            status: 500, 
            headers: {
                'Content-Type': 'application/json'
            },
            body:{ success: 0, msg: "Something went wrong, please re-push the data after some time.", e }
        };
        return;
    }
}