/**
 * Calculates the sum of all elements that are present in one set (array)
 * but not in the other. This means elements common to both sets are excluded from the sum.
 *
 * @param {number[]} set1 The first array of numbers.
 * @param {number[]} set2 The second array of numbers.
 * @returns {number} The sum of elements found uniquely in set1 OR uniquely in set2.
 */
function sumOfDistinctElements(set1, set2) {
    let distinctSum = 0;

    // A helper to quickly check if an element exists in an array.
    // We use a simple loop as requested, avoiding built-in methods like .includes() for this problem.
    const containsElement = (arr, element) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                return true;
            }
        }
        return false;
    };

    // Iterate through set1: if an element from set1 is NOT in set2, add it to the sum.
    for (let i = 0; i < set1.length; i++) {
        const element1 = set1[i];
        if (!containsElement(set2, element1)) {
            distinctSum += element1;
        }
    }

    // Iterate through set2: if an element from set2 is NOT in set1, add it to the sum.
    // This catches elements that are unique to set2.
    for (let i = 0; i < set2.length; i++) {
        const element2 = set2[i];
        if (!containsElement(set1, element2)) {
            distinctSum += element2;
        }
    }

    return distinctSum;
}

// --- Example Usage for Problem 1 ---
console.log("--- Problem 1: Sum of Distinct Elements ---");
const setA = [3, 1, 7, 9];
const setB = [2, 4, 1, 9, 3];
const result1 = sumOfDistinctElements(setA, setB);
console.log("Set 1:", setA);
console.log("Set 2:", setB);
console.log("Sum of distinct elements (4, 7, 2):", result1); // Expected: 13 (4 + 7 + 2)

const setC = [10, 20, 30];
const setD = [30, 40, 50];
const result2 = sumOfDistinctElements(setC, setD);
console.log("\nSet 3:", setC);
console.log("Set 4:", setD);
console.log("Sum of distinct elements (10, 20, 40, 50):", result2); // Expected: 120



/**
 * Calculates the dot product (scalar product) of two vectors.
 * It's assumed that the input vectors are arrays of numbers and have the same length.
 *
 * @param {number[]} v1 The first vector (array of numbers).
 * @param {number[]} v2 The second vector (array of numbers).
 * @returns {number} The dot product of v1 and v2. Returns 0 if vectors are invalid or have different lengths.
 */
function dot_product(v1, v2) {
    // Input validation: Check if both inputs are arrays and have matching lengths.
    if (!Array.isArray(v1) || !Array.isArray(v2) || v1.length !== v2.length) {
        console.error("Error: Vectors must be arrays of the same length for dot product calculation.");
        return 0; // Return 0 or throw an error for invalid input.
    }

    let ps = 0; // Initialize the sum for the dot product.

    // Iterate through the vectors, multiplying corresponding elements and summing them up.
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    return ps;
}


/**
 * Determines if 'n' pairs of given vectors are orthogonal by calling the dot_product function.
 * For demonstration purposes, vector pairs are predefined; in a real application,
 * you would typically read these from user input or a data source.
 */
function checkOrthogonality() {
    console.log("\n--- Problem 2: Check Orthogonality ---");

    // Example predefined vector pairs for demonstration.
    // In a real scenario, you'd prompt for 'numPairs' and then loop to get 'vector1', 'vector2', 'vectorSize' from user input.
    const vectorPairs = [
        { v1: [1, 0, 0], v2: [0, 1, 0] }, // Example 1: Orthogonal (dot product = 0)
        { v1: [1, 2, 3], v2: [4, 5, 6] },  // Example 2: Not Orthogonal (dot product = 32)
        { v1: [2, -3], v2: [3, 2] },     // Example 3: Orthogonal (dot product = 0)
        { v1: [5], v2: [10] }          // Example 4: Not Orthogonal (dot product = 50)
    ];

    const numPairs = vectorPairs.length; // Determine number of pairs from our example data.

    // Outer loop to process each pair of vectors.
    for (let i = 0; i < numPairs; i++) {
        const currentV1 = vectorPairs[i].v1;
        const currentV2 = vectorPairs[i].v2;
        // The size of the vectors is derived from the length of currentV1.
        // The dot_product function handles the length check.

        console.log(`\n--- Analyzing Pair ${i + 1} ---`);
        console.log(`Vector 1: [${currentV1}]`);
        console.log(`Vector 2: [${currentV2}]`);

        // Call the dot_product function to get the dot product.
        const dotProductResult = dot_product(currentV1, currentV2);

        // Check if the dot product is zero to determine orthogonality.
        if (dotProductResult === 0) {
            console.log(`Result: Vectors of Pair ${i + 1} are **orthogonal**.`);
        } else {
            console.log(`Result: Vectors of Pair ${i + 1} are **NOT orthogonal**. Dot product: ${dotProductResult}`);
        }
    }
}

// Execute the orthogonality check to see the results in the console.
checkOrthogonality();