interface responseData {
    code: number,
    message: string,
    data: any
}

interface output {
    isSuccess: boolean,
    message: string,
    data?: any
}

export function Response(data: responseData): output {
    let receive = data.data

    if (receive.code === 1) {
        return {
            isSuccess: true,
            message: receive.message,
            data: receive.data
        }
    } else {
        return {
            isSuccess: false,
            message: receive.message,
        }
    }
}
