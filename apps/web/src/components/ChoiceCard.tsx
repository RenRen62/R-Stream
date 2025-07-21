import { RadioGroupItem } from '../components/ui/radio-group';

type ChoiceCardProps = {
  selected: boolean;
  label: string;
  onClick: () => void;
  radioId: string;
  radioValue: string;
};

const ChoiceCard: React.FC<ChoiceCardProps> = ({
  selected,
  label,
  onClick,
  radioId,
  radioValue
}) => {
  return (
    <div
      className={`flex-1 cursor-pointer p-4 text-center transition-colors ${
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
      <RadioGroupItem value={radioValue} id={radioId} className='sr-only' />
      <span className='text-sm font-medium'>{label}</span>
    </div>
  );
};

export { ChoiceCard };
