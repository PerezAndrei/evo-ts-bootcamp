export const arrayEqualityByOrder: (recieved: [], arrCompared: []) => jest.CustomMatcherResult = (recieved, arrCompared) => {
    const messages: string[] = [];
    let pass = true;

    if (recieved.length !== arrCompared.length) {
        messages.push('number of elements is different')
        pass = false;
    }
    else {
        for (let i = 0; i < recieved.length; i++) {
            if (recieved[i] !== arrCompared[i]) {
                messages.push(`recieved[i] !== arrCompared[i] at index: '${i}'`);
                if (pass) {
                    pass = false;
                }
            }
        }
    }

    return {
        pass: pass,
        message: () => pass ? 'passed successfully' : messages.join(', ')
    }
}