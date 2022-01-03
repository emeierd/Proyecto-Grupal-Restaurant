const validation = (obj, val) => {
    switch (obj) {
        case 'name':
            if (val.length < 2) {
                return {valid: false, text: <p>Name should have at least 2 characters</p>}
            } else {
                return {valid: true, text: null};
            }
        case "lastName":
            if (val.length < 2) {
                return {valid: false, text: <p>Lastname should have at least 2 characters</p>}
            } else {
                return {valid: true, text: null};
            }
        case "email":
            if (!/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val)) {
                return {valid: false, text: <p>Invalid email</p>}
            } else {
                return {valid: true, text: null};
            }
        case "password":
            if (val.length < 8) {
                return { validation: {valid: false, text:<p>Password must have at least 8 characters</p>}, pass: null}
            } else {
                return { validation: {valid: true, text: null}, pass: val };
            }
        default:
            return null;    
    }
}

export default validation;