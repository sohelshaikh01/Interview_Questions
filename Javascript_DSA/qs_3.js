// Valid Anagram - LC242

// Two word are given, Other word must made from the rearrangement of first word
// Ex: s = anagram, t = nagaram

// const validAnagram = function(s, t) {
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");

//     return s = t;
// }

// Optimised Solution:

const validAnagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    obj1 = {};
    obj2 = {};

    for(let i = 0; i<s.length; i++) {
        // obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;

        if(obj1.hasOwnProperty(s[i])) obj1[s[i]]++;
        else obj1[s[i]] = 1;
    }

    for(const key in obj1) {
        if(obj1[key] != obj2[key])
            return false;
    }

    return true;
}

console.log(validAnagram("anagram", "nagaram"));