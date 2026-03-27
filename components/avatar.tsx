type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={picture}
        className="w-9 h-9 rounded-full ring-2 ring-purple-500/30 ring-offset-2 ring-offset-transparent"
        alt={name}
      />
      <div className="text-sm font-medium text-soft">{name}</div>
    </div>
  )
}

export default Avatar
