import styled from "styled-components";

export const Container = styled.div`
  .title {
    text-align: center;
    margin: 1rem 0;
    position: absolute;
    top: 60px;
    left: 80px;
    font-weight: bold;

    @media (max-width: 768px) {
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  body {
    background-color: #fff;
  }

  .navbar {
    background-color: var(--color-1);
    color: #fff;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  .container-main {
    display: flex;
    height: 90vh;
    padding: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 10px;
    }
  }

  .launches {
    width: 40%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px){
      width: 100%;
      margin-top: 50px;
    }
  }

  #load-more{
    margin-top: 2px;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  #load-more:hover{
    background-color: #2980b9;
  }

  .mission-details{
    border: 1px solid #01161e;
    border-radius: 10px;
    padding: 20px;
    width: 40%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 100px;
    right: 30px;

    @media (max-width: 768px){
      width: 80%;
      right: 10px;
    }
  }

  .mission-details:hover{
    background-color: var(--color-4);
  }

  img{
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  #mission-name-p{
    font-weight: bold;
    padding: 5px;
  }

  #mission-resumo-p{
    margin-bottom: 1rem;
  }

  @keyframes flipDetails {
    from{
      transform: translateX(-20%);
    }
    to{
      transform: translateX(0);
    }
  }

  .button{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
  }

  .button:hover{
    background-color: #2980b9;
    transform: scale(1.05);
  }

  .launch-entry{
    width: 30%;
    background-color: var(--color-5);
    padding: 10px;
    margin-bottom: 1px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 1px solid #01161e;
    transform: all 0.3;
  }

  .launch-entry:hover{
    transform: scale(1.02);
    background-color: var(--color-4);
  }

  .floating-button{
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-size: 20px;

    &:hover{
      background-color: #2980b9;
    }
  }
`;

export const MovieList = styled.ul`
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .launch-entry{
    width: 100%;
    background-color: var(--color-5);
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 1px solid #01161e;
    transform: all 0.3;
  }

  .launch-entry:hover{
    transform: scale(1.02);
    background-color: var(--color-4);
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

export const Movie = styled.div`
  li{
    list-style: none;
  }

  span{
    font-weight: bold;
    font-size: 120%;
  }
`;
