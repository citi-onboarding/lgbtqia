
export const getIndex = (request, response) => {
    response.sendFile('/public/index.html', {root: __dirname })
}

