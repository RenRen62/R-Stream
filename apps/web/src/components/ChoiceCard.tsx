import { RadioGroupItem } from '../components/ui/radio-group';

type ChoiceCardProps = {
  selected: boolean;
  label: string;
  onClick: () => void;
  radioId: string;
  radioValue: string;
};

function getChoiceClass(isSelected: boolean) {
  return [
    'rounded-lg flex cursor-pointer items-center space-x-2 rounded-lg border-2 p-4 transition-colors',
    isSelected
      ? 'border-blue-600 bg-blue-50 text-blue-700'
      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'
  ].join(' ');
}

const ChoiceCard: React.FC<ChoiceCardProps> = ({
  selected,
  label,
  onClick,
  radioId,
  radioValue
}) => (
  <div
    className={getChoiceClass(selected)}
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
    <RadioGroupItem
      value={radioValue}
      id={radioId}
      className='flex h-5 w-5 appearance-none items-center justify-center rounded-full border-2 border-blue-500 transition-all data-[state=checked]:border-blue-700 data-[state=checked]:bg-blue-500 data-[state=checked]:ring-2 data-[state=checked]:ring-blue-300'
    />
    <label htmlFor={radioId} className='cursor-pointer text-gray-700'>
      {label}
    </label>
  </div>
);

export { ChoiceCard };
