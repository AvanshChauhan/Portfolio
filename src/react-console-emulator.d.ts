declare module 'react-console-emulator' {
  import * as React from 'react'

  type Command = {
    description?: string
    usage?: string
    fn: (...args: string[]) => React.ReactNode | Promise<React.ReactNode>
    explicitExec?: boolean
  }

  type CommandResult = {
    command: string | null
    args: string[]
    rawInput: string | null
    result: React.ReactNode | null
  }

  export interface TerminalProps {
    commands: Record<string, Command>
    welcomeMessage?: boolean | string | string[]
    promptLabel?: React.ReactNode
    errorText?: string
    autoFocus?: boolean
    dangerMode?: boolean
    locked?: boolean
    readOnly?: boolean
    disabled?: boolean
    disableOnProcess?: boolean
    hidePromptWhenDisabled?: boolean
    ignoreCommandCase?: boolean
    noDefaults?: boolean
    noEchoBack?: boolean
    noHistory?: boolean
    noAutoScroll?: boolean
    noNewlineParsing?: boolean
    styleEchoBack?: 'labelOnly' | 'textOnly' | 'fullInherit' | 'messageInherit'
    className?: string
    contentClassName?: string
    inputAreaClassName?: string
    promptLabelClassName?: string
    inputClassName?: string
    inputTextClassName?: string
    messageClassName?: string
    style?: React.CSSProperties
    contentStyle?: React.CSSProperties
    inputAreaStyle?: React.CSSProperties
    promptLabelStyle?: React.CSSProperties
    inputStyle?: React.CSSProperties
    inputTextStyle?: React.CSSProperties
    messageStyle?: React.CSSProperties
    commandCallback?: (command: CommandResult) => void
  }

  export default class Terminal extends React.Component<TerminalProps> {}
}
