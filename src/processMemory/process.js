const used = process.memoryUsage();
console.log(`Memória usada: ${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`);
used()