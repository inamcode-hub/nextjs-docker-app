
interface CustomerAvatarProps {
  name: string;
  className?: string;
}

export default function CustomerAvatar({ name, className = "w-12 h-12" }: CustomerAvatarProps) {
  // Generate initials from name
  const getInitials = (fullName: string): string => {
    return fullName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  };

  // Generate a consistent color based on name
  const getAvatarColor = (fullName: string): string => {
    const colors = [
      'bg-primary text-white',
      'bg-secondary text-white', 
      'bg-blue-500 text-white',
      'bg-green-500 text-white',
      'bg-purple-500 text-white',
      'bg-orange-500 text-white',
      'bg-teal-500 text-white',
      'bg-indigo-500 text-white',
    ];
    
    // Use name length and first char to determine color
    const charCode = fullName.charCodeAt(0);
    const colorIndex = (charCode + fullName.length) % colors.length;
    return colors[colorIndex];
  };

  const initials = getInitials(name);
  const colorClass = getAvatarColor(name);

  return (
    <div className={`${className} ${colorClass} rounded-full flex items-center justify-center font-semibold text-sm`}>
      {initials}
    </div>
  );
}