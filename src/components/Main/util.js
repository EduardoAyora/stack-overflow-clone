export function addId(doc) {
    console.log('main')
    const completeDoc = doc.data()
    completeDoc.id = doc.id
    return completeDoc
}