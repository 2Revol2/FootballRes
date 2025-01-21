import s from './Input.module.scss'
type Props = {
  searchQuery: string;
  setSearchQuery: (value: React.SetStateAction<string>) => void;
};

export const Input = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <input
    className={s.inputField}
      type="text"
      placeholder="Поиск..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};
