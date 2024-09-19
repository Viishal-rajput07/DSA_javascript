/*
Coding Exercise: Isomorphic Strings
Question :

Isomorphic Strings - Given two strings s and t, determine if they are isomorphic. Two strings s and t are 
isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced 
with another character while preserving the order of characters. No two characters may map to the same 
character, but a character may map to itself. s and t consist of any valid ascii character.
*/

// T=O(n) | S=O(n)
const checkIsomorphic = (s, t) => {

    if (s.length !== t.length) return false

    let s_Hash = {}
    let t_Hash = {}

    for (let i = 0; i < s.length; i++) {
        let charAtS = s[i]
        let charAtT = t[i]

        if (!s_Hash[charAtS]) {
            s_Hash[charAtS] = charAtT
        }
        if (!t_Hash[charAtT]) {
            t_Hash[charAtT] = charAtS
        }

        if (s_Hash[charAtS] !== charAtT || t_Hash[charAtT] !== charAtS) {
            return false
        }
    }

    return true
}

console.log(checkIsomorphic('aba', 'pqr'))
console.log(checkIsomorphic('aba', 'pqp'))
console.log(checkIsomorphic('aa', 'lt'))