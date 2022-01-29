type Props = {
  isYes: boolean
  onClick: () => void
}

export const TextButton: React.FC<Props> = ({ isYes, onClick }) => {
  return (
    <button className="mx-auto mb-10 p-3 bg-green-200" onClick={onClick}>
      {isYes ? 'true' : 'false'}
    </button>
  )
}
