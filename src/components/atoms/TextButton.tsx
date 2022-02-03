type Props = {
  isYes: boolean
  onClick: () => void
}

export const TextButton: React.FC<Props> = ({ isYes, onClick }) => {
  return (
    <button className="border rounded-full w-20 py-2 px-3" onClick={onClick}>
      {isYes ? 'Yes' : 'No'}
    </button>
  )
}
