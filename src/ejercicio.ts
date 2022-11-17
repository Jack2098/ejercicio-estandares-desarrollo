
export function hacerTorta(enferma: boolean) {
    return new Promise<string>((resolve, reject) => {
        if (enferma) {
            reject('0 tortas');
        } else {
            resolve('5 tortas');
        }
    })
}

// hacerTorta(false)
//     .then(res => console.log(`Hay un total de ${res} tortas`))
//     .catch(err => console.log(`Hay un total de ${err} tortas`))
//     .finally(() => console.log('De cualquier manera, todavía vamos a tener una fiesta.'));