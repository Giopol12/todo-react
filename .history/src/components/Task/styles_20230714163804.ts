import styled from 'styled-components'

interface DoneButtonProps {
  isDone: boolean
}

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-400']};

  & + div {
    margin-top: 0.75rem;
  }

  background: ${(props) => props.theme['gray-500']};
  div {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  p {
    font-size: 0.875rem;
  }
`

export const TrashButton = styled.button`
  color: ${(props) => props.theme['gray-300']};
  background: transparent;
  border: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['red-500']};
    transition: all 0.1;
  }
`
export const DoneButton = styled.button<DoneButtonProps>`
  box-sizing: border-box;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isDone === true
      ? props.theme['purple-300']
      : props.theme['blue-500']};
    transition: background 0.1s;
  };
  border: 1px solid ${(props) => props.theme['blue-300']};
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.isDone === true
        ? props.theme['purple-300']
        : props.theme['blue-500']};
    transition: background 0.1s;
  }
`
