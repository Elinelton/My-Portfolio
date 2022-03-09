import './style.scss';
type LogoProps = {
  text?: string;
}

export function Logo(props: LogoProps) {
  return (
    <div className='container-logo'>
      <h1>Logo</h1>
    </div>
  )
}