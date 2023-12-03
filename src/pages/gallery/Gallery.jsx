import React from 'react';
import { FilterPart, Section, ShowPart } from './Galleru.styled';
import FilterForm from './FilterForm/FilterForm';

const Gallery = () => {
  return (
    <div className="container">
      <Section>
        <FilterPart>
          <FilterForm />
        </FilterPart>
        <ShowPart></ShowPart>
      </Section>
    </div>
  );
};

export default Gallery;
