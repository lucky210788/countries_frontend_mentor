import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { CustomSelect } from '../CustomSelect';
import Search from "../Search";

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

interface ControlsProps {
    onSearch: (search: string, regionValue: string) => void;
}

const Controls: React.FC<ControlsProps> = ({ onSearch }) => {
    const [search, setSearch] = useState<string>('');
    const [region, setRegion] = useState<{ value: string; label: string } | null>(null);

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue);

        // eslint-disable-next-line
    }, [search, region]);

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={region}
                // @ts-ignore
                onChange={setRegion}
            />
        </Wrapper>
    );
}

export default Controls;