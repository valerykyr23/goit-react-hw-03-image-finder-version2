import { BsEmojiWink } from 'react-icons/bs';
import { StartTxtWrapper, StartTxt } from './StartText.styled';

export const StartText = () => {
  return (
    <StartTxtWrapper>
      <StartTxt>
        Your Free Image Search Tool
        <BsEmojiWink />
      </StartTxt>
      <StartTxt>Let's look it up!</StartTxt>
    </StartTxtWrapper>
  );
};