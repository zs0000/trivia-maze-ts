
import s from './QuestionAnswerComponent.module.css';
export default function QuestionAnswerComponent() {
  return (
    <div className={s.container}>
        <div className={s.questionContainer}>
            <QuestionComponent />   
        </div>
        <div className={s.answersContainer}>
            <AnswersComponent />
        </div>
    </div>
  )
}


const QuestionComponent = () => {
    return (
        <div className={s.questionComponentContainer}>QuestionComponent</div>
    )
}

const AnswersComponent = () => {
    return (
        <div className={s.answersComponentContainer}>AnswersComponent</div>
    )
}
