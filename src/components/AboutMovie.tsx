import type { FC } from 'react'
import { getLanguageName } from '../utils/getLanguageName'
import { getAmount } from '../utils/getAmount'
import type { IMovieFeaturesProps } from '../app/types'

export const AboutMovie: FC<IMovieFeaturesProps> = ({ movie }) => {
  const originLanguage = movie.language
    ? getLanguageName(movie.language)
    : 'Нет информации'
  const budget =
    movie.language && movie.budget
      ? getAmount(movie.language, movie.budget)
      : 'Нет информации'
  const revenue =
    movie.language && movie.revenue
      ? getAmount(movie.language, movie.revenue)
      : 'Нет информации'
  const director = movie.director ? movie.director : 'Нет информации'
  const production = movie.production ? movie.production : 'Нет информации'
  const awardsSummary = movie.awardsSummary
    ? movie.awardsSummary
    : 'Нет информации'

  return (
    <section className="about-movie">
      <div className="container">
        <h2 className="about-movie__title">О фильме</h2>
        <div className="about-movie__wrap">
          <div className="about-movie__feature">
            <p className="about-movie__feature-caption">
              <span className="about-movie__caption">Язык оригинала</span>
              <span className="about-movie__separator"></span>
            </p>
            <span className="about-movie__descr">{originLanguage}</span>
          </div>
          <div className="about-movie__feature">
            <p className="about-movie__feature-caption">
              <span className="about-movie__caption">Бюджет</span>
              <span className="about-movie__separator"></span>
            </p>
            <span className="about-movie__descr">{budget}</span>
          </div>
          <div className="about-movie__feature">
            <p className="about-movie__feature-caption">
              <span className="about-movie__caption">Выручка</span>
              <span className="about-movie__separator"></span>
            </p>
            <span className="about-movie__descr">{revenue}</span>
          </div>
          <div className="about-movie__feature">
            <p className="about-movie__feature-caption">
              <span className="about-movie__caption">Режиссер</span>
              <span className="about-movie__separator"></span>
            </p>
            <span className="about-movie__descr">{director}</span>
          </div>
          <div className="about-movie__feature">
            <p className="about-movie__feature-caption">
              <span className="about-movie__caption">Продакшен</span>
              <span className="about-movie__separator"></span>
            </p>
            <span className="about-movie__descr">{production}</span>
          </div>
          <div className="about-movie__feature">
            <p className="about-movie__feature-caption">
              <span className="about-movie__caption">Награды</span>
              <span className="about-movie__separator"></span>
            </p>
            <span className="about-movie__descr">{awardsSummary}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
