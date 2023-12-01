import styled from "styled-components";

export const CharacterContainer = styled.div`
    perspective: 1000px;
`;

export const AvatarImg = styled.img``;

export const CharButton = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 100%;
    height: 40px;
    transition: transform .5s;
    transform-style: preserve-3d;
    &:hover {
        transform: rotateX(100deg);
    }
    .front {
        transform: translateZ(20px);
        height: 40px;
    }
    .back {
        transform: rotateX(-90deg) translateZ(-20px);
        height: 40px;
    }
`;
