"use client"
import './CardAnimation.scss';

export default function CardAnimation() {

  const arrCardLoading = [1,2,3,4,5,6,7,8]

  return (
    <>
    {
      arrCardLoading.map((item) => (
        <div key={item}>
          <div className="card-loading" />
        </div>
      ))
    }
    </>
  )
}
