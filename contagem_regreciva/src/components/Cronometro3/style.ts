import styled from "styled-components";

interface ContainerProps {
    background?: string | undefined;
    color?: string | undefined;
    fontSize?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
}

export const Container = styled.div<ContainerProps>`

    background: ${(props: any) => props.background ? props.background : "rgb(0, 0, 0)"};
    color: ${(props: any) => props.color ? props.color : "#fff"};
    font-size: ${(props: any) => props.fontSize ? props.fontSize : "20px"};
    max-width:${(props: any) => props.width ? props.width : "200px"};
    min-width:200px;
    height:${(props: any) => props.height ? props.height : "200px"};

    border-radius:20px;

    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding:10px;
    div{ 

        width:100%;
        height:100%;
        text-align: center;
        

        line-height: ${(props: any) => props.height ? props.height : "200px"};
        font-family: 'Orbitron', sans-serif;

        
    }

`