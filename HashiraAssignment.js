// Hashira Placements Assignment - Polynomial Interpolation (JS)

const input = {
"keys": {
    "n": 10,
    "k": 7
  },
  "1": {
    "base": "6",
    "value": "13444211440455345511"
  },
  "2": {
    "base": "15",
    "value": "aed7015a346d635"
  },
  "3": {
    "base": "15",
    "value": "6aeeb69631c227c"
  },
  "4": {
    "base": "16",
    "value": "e1b5e05623d881f"
  },
  "5": {
    "base": "8",
    "value": "316034514573652620673"
  },
  "6": {
    "base": "3",
    "value": "2122212201122002221120200210011020220200"
  },
  "7": {
    "base": "3",
    "value": "20120221122211000100210021102001201112121"
  },
  "8": {
    "base": "6",
    "value": "20220554335330240002224253"
  },
  "9": {
    "base": "12",
    "value": "45153788322a1255483"
  },
  "10": {
    "base": "7",
    "value": "1101613130313526312514143"
  }
};

// Step 1: Parse roots
const n = input.keys.n;
const k = input.keys.k;

function findConstantTerm(k, input) {
    let result = 0n;
    
    // Process one point at a time
    for (let i = 1; i <= k; i++) {
        const base = parseInt(input[i.toString()].base);
        const valueStr = input[i.toString()].value;
        const yi = BigInt(parseInt(valueStr, base));
        
        // Calculate contribution of this point to constant term
        let term = yi;
        let denominator = 1n;
        
        // Calculate product terms directly
        for (let j = 1; j <= k; j++) {
            if (i !== j) {
                denominator *= BigInt(i - j);
                term *= BigInt(-j);
            }
        }
        
        result += term / denominator;
    }
    
    return result;
}

const c = findConstantTerm(k, input);
console.log("Constant term c =", c.toString());