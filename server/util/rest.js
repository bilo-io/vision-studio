const accessMember = (collection, id) => (
    collection.slice().filter(item => item.id === id).pop()
)
const accessMembers = (collection, ids) => (
    collection.slice().filter(item => ids.includes(item.id))
)

const createMember = (collection, member) => ([
    ...collection,
    {
        // TODO: cater for number & GUID
        id: collection[collection.length - 1].id + 1,
        ...member
    }
])

const updateMember = (collection, id, member) => {
    return collection.map(item => item.id === id
        ? { id, ...member }
        : item
    ).slice()
}

const deleteMember = (collection, id) => (
    collection.filter(item => item.id !== id)
)

module.exports = {
    accessMember,
    accessMembers,
    createMember,
    updateMember,
    deleteMember
}
