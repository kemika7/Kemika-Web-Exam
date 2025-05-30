function rightAngledTriangle(rows) {
    for (let i=1; i<=rows; i++) {
        console.log(" ".repeat(rows-i) + "*".repeat(i));
    }
}
rightAngledTriangle(5);