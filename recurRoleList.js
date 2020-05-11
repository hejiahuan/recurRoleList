/**
 * 引出的原因是
 * 我在点击删除权限的时候，这个时候权限不能删，因为我用的是无限极递归函数
 * 那么存在一个问题，就是父类id传不过来，
 * 我想了很多办法，比如在element-ui中传入自定义函数，但是element-ui好像不支持自定义函数，
 * 试了很久都没有用！！！那么我这样想的
 * 为什么不把从mysql中得到的元数据，进行加工，每个子栏目没有父id我加上一个父id不就想行了,
 * 在Vue中用递归的方法不用返回什么加入的值啊，什么的，直接遍历即可、
 * 
 * 目标。递归无限极栏目，并且给每个子栏目加上父id!!!!
 * 
 */

class recurRoleList{
     /**
  * 目标。递归无限极栏目，并且给每个子栏目加上父id!!!!
  * @param {从数据库中得到元数据} roleList 
  */
 recurAllRoleList(roleList){
    roleList.forEach(item => {
      let roleId=item.id
       if(item.children){
        this._recurRoleList2(item.children,roleId)
       }
    });
  }

  /**
   * 这个类才是主要类
   * 为什么再写一个类，那是因为我们要给子栏目加入父类而不是父类再加一个父id,那不多此一举了吗
   * @param {} child 
   * @param {*} RoleId 
   */
_recurRoleList2(child,RoleId){
    child.forEach(item=>{
      item.RoleId=RoleId
      item.children&&this._recurRoleList2(item.children,RoleId)
    })
  }

}

export{
    recurRoleList  
}
