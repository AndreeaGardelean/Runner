export default function ActivityData({data, unit}) {
  return (
    <div>
      <p className="data">{data}</p>
      <p className="data-unit">{unit}</p>
    </div>
  )
}