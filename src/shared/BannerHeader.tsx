import { FC } from 'react';
interface Props {
    title: string,
    description: string
}
export const BannerHeader:FC<Props> = ({title,description}) => {
  return (
    <>
    <div className="banner-header-title">
      <div className="headline-card">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      </div>
    </>
  )
}
