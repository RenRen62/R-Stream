import { RadioGroupItem } from '../components/ui/radio-group';

type ChoiceCardProps = {
  selected: boolean;
  label: string;
  onClick: () => void;
  radioValue: string;
  rounded?: 'left' | 'right';
};

const ChoiceCard: React.FC<ChoiceCardProps> = ({
  selected,
  label,
  onClick,
  radioValue,
  rounded
}) => {
  const roundedClass =
    rounded === 'left'
      ? 'rounded-l-lg'
      : rounded === 'right'
        ? 'rounded-r-lg'
        : '';

  return (
    <div
      className={`min-w-0 flex-1 cursor-pointer p-4 text-center transition-colors ${roundedClass} ${
        selected
          ? 'bg-blue-500 text-white'
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
      onClick={onClick}
      tabIndex={0}
      role='radio'
      aria-checked={selected}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <RadioGroupItem value={radioValue} className='sr-only' />
      <span className='text-sm font-medium'>{label}</span>
    </div>
  );
};

export { ChoiceCard };
