import React, {useState, useRef} from 'react'
import firebase, {firestore} from '../../firebase'

const questionsRef = firestore.collection('questions')

export default function CreateQuestionView() {
    const [loading, setLoading] = useState(false)
    const titleRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const {serverTimestamp} = firebase.firestore.FieldValue
            await questionsRef.add({
                title: titleRef.current.value,
                createdAt: serverTimestamp()
            })
            titleRef.current.value = ''
        } catch (e) {
            console.log(e)
            alert('Ha ocurrido un error')
        }
        setLoading(false)
    }

    return (
        <div>
            <h1>Has una pregunta</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Título</label>
                <input ref={titleRef} id='title' type='text' />
                <input disabled={loading} type='submit' value='Confirmar' />
            </form>
        </div>
    )
}
