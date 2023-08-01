import constate from 'constate';

interface Props {
  filterByStatusList: ('blocked' | 'deleted' | 'done' | 'toDo')[];
  filterByname: string;
  filterByOrder: string;
  filterByDescendant: boolean;
  quantity: number;
  page: number;
  count: number;
  setFilterByStatusList: (
    arg0: (
      arg1: ('blocked' | 'deleted' | 'done' | 'toDo')[]
    ) => ('blocked' | 'deleted' | 'done' | 'toDo')[]
  ) => void;
  setFilterByName: (arg0: (arg1: string) => string) => void;
  setFilterByOrder: (arg0: string) => void;
  setFilterByDescendant: (arg0: boolean) => void;
  setQuantity: (arg0: (arg1: number) => number) => void;
  setPage: (arg0: (arg1: number) => number) => void;
}

const useFilters = ({
  filterByStatusList,
  filterByname,
  filterByOrder,
  filterByDescendant,
  quantity,
  page,
  count,
  setFilterByStatusList,
  setFilterByName,
  setFilterByOrder,
  setFilterByDescendant,
  setQuantity,
  setPage
}: Props) => {
  const addToFilterByStatusList = (
    newStatus: 'blocked' | 'deleted' | 'done' | 'toDo'
  ) => {
    if (filterByStatusList.includes(newStatus)) return;
    setFilterByStatusList((previousState) =>
      structuredClone([...previousState, newStatus])
    );
  };

  const removeFromFilterByStatusList = (
    oldStatus: 'blocked' | 'deleted' | 'done' | 'toDo'
  ) => {
    if (!filterByStatusList.includes(oldStatus)) return;
    setFilterByStatusList((previousState) =>
      previousState.filter((status) => status !== oldStatus)
    );
  };

  return {
    addToFilterByStatusList,
    count,
    filterByDescendant,
    filterByOrder,
    filterByStatusList,
    filterByname,
    page,
    quantity,
    removeFromFilterByStatusList,
    setFilterByDescendant,
    setFilterByName,
    setFilterByOrder,
    setPage,
    setQuantity
  };
};

const [FiltersProvider, useFiltersContext] = constate(useFilters);
export { FiltersProvider, useFiltersContext };
