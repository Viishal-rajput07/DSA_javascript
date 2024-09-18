const checkIsomorphic = (s, t) =>{

    if(s.length !== t.length) return false

    let s_Hash = {}
    let t_Hash = {}

    for(let i = 0; i<s.length; i++){
        let charAtS = s[i]
        let charAtT = t[i]

        if(!s_Hash[charAtS]){
            s_Hash[charAtS] = charAtT
        }
        if(!t_Hash[charAtT]){
            t_Hash[charAtT] = charAtS
        }

        if(s_Hash[charAtS] !== charAtT || t_Hash[charAtT] !== charAtS){
            return false
        }
    }

    return true
}

console.log(checkIsomorphic('aba', 'pqr'))
console.log(checkIsomorphic('aba', 'pqp'))
console.log(checkIsomorphic('aa', 'lt'))