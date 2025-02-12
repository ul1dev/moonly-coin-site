
import React from 'react';

interface PolicySectionProps {
  title?: string;
  content: string;
  list?: string[];
  additionalContent?: string;
  className?: string;
  titleClassName?: string;
}

const PolicySection: React.FC<PolicySectionProps> = ({
  title,
  content,
  list,
  additionalContent,
  className = "",
  titleClassName = "text-xl font-semibold text-primary mb-4"
}) => {
  return (
    <div className={className}>
      {title && <h2 className={titleClassName}>{title}</h2>}
      <p className="text-gray-300 mb-6">{content}</p>
      {list && list.length > 0 && (
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 pl-4">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {additionalContent && (
        <p className="text-gray-300 mb-6">{additionalContent}</p>
      )}
    </div>
  );
};

export default PolicySection;
