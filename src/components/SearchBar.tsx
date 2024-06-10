import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadSearchRequest } from "../store/modules/characters/actions";
import { useForm } from "react-hook-form";
import { setInputSearchValue } from "../store/modules/dados/actions";

export const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(loadSearchRequest(data.value));
    dispatch(setInputSearchValue(data.value));
  };

  const SearchInput = styled.input`
    background-color: #ff000053;
    border-radius: 10rem;
    height: 4rem;
    width: 100%;
    border: none;
    padding-left: 4rem;
    outline: none;
    font-size: 18px;
    color: red;
  `;

  const Wrapper = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;
  const WrapperSun = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Lupa = styled.img`
    position: absolute;
    left: 15px;
  `;

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <WrapperSun>
        <Lupa
          height={25}
          src="/assets/busca/Lupa/Shape@2x.png"
          alt="lupa"
        ></Lupa>
        <SearchInput
          type="text"
          {...register("value", { required: true })}
          placeholder="Procure por heróis"
        />
      </WrapperSun>
    </Wrapper>
  );
};
