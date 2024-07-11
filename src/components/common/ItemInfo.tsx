const ItemInfo = ({ label = "", value = "" }: ItemInfoProps) => {
  return (
    <div className="col-12 sm:col-6 md:col-3">
      <p className="font-light mb-2">{label}</p>
      <p className="font-semibold">{value || "-"}</p>
    </div>
  );
};

type ItemInfoProps = {
  label: string;
  value: string;
};

export default ItemInfo;
