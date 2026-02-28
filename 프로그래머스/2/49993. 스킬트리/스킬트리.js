function solution(skill, skill_trees) {
    let trees = skill_trees.map((tree) => 
        tree.split('').filter((v) => skill.includes(v)).join('')
    );
    return trees.filter((tree) => skill.slice(0, tree.length) === tree).length;
}