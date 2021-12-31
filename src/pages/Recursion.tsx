import { Box } from '@mui/system';
import { arrayToTree, TreeItem } from 'performant-array-to-tree';

const Recursion = () => {
  const hierarchies = [
    { id: '9', name: 'Pallet', position: 'top', parentId: '5' },
    { id: '1', name: 'Half pallet', position: 'top', parentId: '5' },
    { id: '5', name: 'Case', position: 'middle2', parentId: '3' },
    { id: '8', name: '12-box', position: 'top', parentId: '0' },
    { id: '324', name: 'Export pallet', position: 'top', parentId: '0' },
    { id: '3', name: '6-pack', position: 'middle1', parentId: '0' },
    { id: '0', name: 'Base', position: 'base', parentId: null },
  ];

  const tree = arrayToTree(hierarchies, { dataField: null });

  const orderedHierarchy = getOrderedHierarchy(tree, 'TopDown');
  console.log(orderedHierarchy);

  return (
    <Box>
      {orderedHierarchy.map((hierarchy) => {
        return <Box>{`${hierarchy.name} - ${hierarchy.position}`}</Box>;
      })}
    </Box>
  );
};

const getOrderedHierarchy = (
  tree: TreeItem[],
  order: 'BaseDown' | 'TopDown'
) => {
  const hierarchy: TreeItem[] = [];
  const treeRoot = tree[0];

  (function getNode(node: TreeItem) {
    hierarchy.push(node);
    if (node.children.length > 0) {
      node.children.forEach((childNode: TreeItem) => getNode(childNode));
    }
  })(treeRoot);

  if (order === 'BaseDown') {
    return hierarchy;
  }
  return hierarchy.reverse();
};

export default Recursion;
