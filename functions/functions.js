
export function environment(ELE, ELE1, ELE2) {

    function fonction1() {
        return new Promise(resolve => {
            setTimeout(() => {
                ELE.evolve()
                resolve();
            }, 1000);
        });
    }

    function fonction2() {
        return new Promise(resolve => {
            setTimeout(() => {
                ELE1.evolve()
                resolve();
            }, 5000);
        });
    }

    function fonction3() {
        return new Promise(resolve => {
            setTimeout(() => {
                ELE2.evolve()
                resolve();
            }, 8500);
        });
    }

    async function executeFunctions() {
        await Promise.all([fonction1(), fonction2(), fonction3()]);
    }

    executeFunctions();
}