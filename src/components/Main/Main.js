import React, {useState, useEffect} from 'react'
import '../CreateQuestionView/CreateQuestionView'
import CreateQuestionView from '../CreateQuestionView/CreateQuestionView'
import {firestore} from '../../firebase'
import {addId} from './util'

const questionsRef = firestore.collection('questions')

export default function Main() {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = questionsRef
        .orderBy('createdAt', 'desc')
        .onSnapshot(querySnapshot => {
            const items = []
            querySnapshot.forEach(doc => {
                items.push(addId(doc))
            })
            setQuestions(items)
            setLoading(false)
        }, e => {
            alert('Error solicitando las preguntas')
        })
        return unsubscribe
    }, [])

    const mappedQuestions = questions.map(question => (
        <li key={question.id}>{question.title}</li>
    ))

    if (loading) return <div>Cargando...</div>

    return (
        <div>
            <h1>Preguntas recientes</h1>
            <ul>
                {mappedQuestions}
            </ul>
            <CreateQuestionView />
        </div>
    )
}
