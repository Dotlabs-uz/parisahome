export const GalleryPost = {
    image: {
        type: "string",
        format: "binary"
    }
}
export const Machine = {
    name: {type: 'string'},
    title: {type: 'string'},
    description: {type: 'string'},
    price: {type: 'number'},
    image: {
        type: "string",
        format: "binary"
    }
}

export const MachineUpdate = {
    name: {type: 'string',optional:true},
    title: {type: 'string',optional:true},
    description: {type: 'string',optional:true},
    price: {type: 'number',optional:true},
    image: {
        type: "string",
        format: "binary",
        optional:true
    }
}