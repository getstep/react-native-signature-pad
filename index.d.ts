declare module '@getstep/react-native-signature-pad' {
    import { Component } from 'react'
    import { StyleProp, ViewStyle } from 'react-native'

    export default class SignaturePad extends Component<SignaturePadProps> {
        toData: () => void
        toDataURL: (type?: string, encoderOptions?: number) => void
        clear: () => void
        undo: () => void
    }

    export interface SignaturePadProps {
        onChange?: () => void
        onData?: (data?: Array<Curve>) => void
        onDataLoaded?: (error?: string | Event) => void
        onDataURL?: (base64DataUrl: string) => void
        onError?: (
            errorDomain: string | undefined,
            errorCode: number,
            errorDesc: string
        ) => ReactElement
        onLoadEnd?: () => void
        loader?: (event: WebViewNavigationEvent) => void
        style?: StyleProp<ViewStyle>
        penColor?: string
        minWidth?: number
        maxWidth?: number
        dotSize?: number
        minDistance?: number
        line?: boolean
        ratio?: number
        subtitle?: string
        data?: any
        dataURL?: string
    }

    export interface Curve {
        color?: string
        points?: Array<BasicPoint>
    }

    export interface BasicPoint {
        time: number
        x: number
        y: number
    }
}
